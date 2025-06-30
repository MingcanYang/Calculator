const buttons = [
  { id: 'clear',   label: 'AC', type: 'clear'   },
  { id: 'divide',  label: '/',  type: 'operator'},
  { id: 'multiply',label: '*',  type: 'operator'},
  { id: 'subtract',label: '-',  type: 'operator'},
  { id: 'seven',   label: '7',  type: 'number'  },
  { id: 'eight',   label: '8',  type: 'number'  },
  { id: 'nine',    label: '9',  type: 'number'  },
  { id: 'add',     label: '+',  type: 'operator'},
  { id: 'four',    label: '4',  type: 'number'  },
  { id: 'five',    label: '5',  type: 'number'  },
  { id: 'six',     label: '6',  type: 'number'  },
  { id: 'equals',  label: '=',  type: 'equals'  },
  { id: 'one',     label: '1',  type: 'number'  },
  { id: 'two',     label: '2',  type: 'number'  },
  { id: 'three',   label: '3',  type: 'number'  },
  { id: 'zero',    label: '0',  type: 'number'  },
  { id: 'decimal', label: '.',  type: 'decimal' }
];

function Calculator() {
  const [display, setDisplay] = React.useState('0');
  const [expr, setExpr]       = React.useState('');
  const [lastType, setLastType] = React.useState('clear');

  const handleNumber = num => {
    if (lastType === 'equals') {
      setExpr(num);
      setDisplay(num);
    } else {
      // 防止多个前导零
      if (display === '0' || lastType === 'operator') {
        setDisplay(num);
      } else {
        setDisplay(display + num);
      }
      setExpr(prev => prev + num);
    }
    setLastType('number');
  };

  const handleDecimal = () => {
    if (lastType === 'equals') {
      setExpr('0.');
      setDisplay('0.');
      setLastType('decimal');
      return;
    }
    // 当前数字段已有小数点时跳过
    const parts = display.split(/[\+\-\*\/]/).pop();
    if (parts.includes('.')) return;

    if (lastType === 'operator') {
      setExpr(prev => prev + '0.');
      setDisplay('0.');
    } else {
      setExpr(prev => prev + '.');
      setDisplay(display + '.');
    }
    setLastType('decimal');
  };

  const handleOperator = op => {
  if (lastType === 'equals') {
    // = 后直接继续新的表达式
    setExpr(display + op);
  } else if (lastType === 'operator') {
    if (op === '-') {
      // 连续 operator + '-' 时，作为负号直接附加
      setExpr(prev => prev + op);
    } else {
      // 连续输入多个 operator（含负号）时，一次性替换成最新的 op
      setExpr(prev => prev.replace(/[\+\-\*\/]+$/, op));
    }
  } else {
    setExpr(prev => prev + op);
  }
  setDisplay(op);
  setLastType('operator');
};

  const handleClear = () => {
    setDisplay('0');
    setExpr('');
    setLastType('clear');
  };

  const handleEquals = () => {
    let formula = expr;
    // 如果以运算符结尾，去掉它
    if (/[\+\-\*\/]$/.test(formula)) {
      formula = formula.slice(0, -1);
    }
    try {
      // 用 eval 进行公式逻辑计算
      let result = eval(formula);
      // 保留至多 6 位小数，去掉多余零
      result = parseFloat(result.toFixed(6)).toString();
      setDisplay(result);
      setExpr(result);
      setLastType('equals');
    } catch (err) {
      setDisplay('Error');
      setExpr('');
      setLastType('clear');
    }
  };

  const handleClick = label => {
    if (/^[0-9]$/.test(label))        return handleNumber(label);
    if (label === '.')                return handleDecimal();
    if (label === 'AC')               return handleClear();
    if (label === '=')                return handleEquals();
    // 其余视为运算符
    return handleOperator(label);
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      {buttons.map(btn => (
        <button
          key={btn.id}
          id={btn.id}
          onClick={() => handleClick(btn.label)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));