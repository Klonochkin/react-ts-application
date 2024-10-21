import { useState } from 'react';
import './App.css';

interface SquareProps {
    value: string;
    click: () => void;
}

function Square({ value, click }: SquareProps) {
    return (
        <button onClick={click} className='button'>
            {value}
        </button>
    );
}

function App() {
    const [isNextX, setIsNextX] = useState(true);
    const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
    const [history, setHistory] = useState(Array(9).fill(Array(9).fill('')));
    const [number, setNumber] = useState(0);
    const [inner, setInner] = useState<React.ReactElement[]>([]);
    let status: string = `Следующий ходит: ${isNextX ? 'X' : 'O'}`;
    const winner = calculateWinner(squares);

    if (winner !== null) {
        status = `Выиграл: ${winner}`;
    } else {
        status = `Следующий ходит: ${isNextX ? 'X' : 'O'}`;
    }
    function clickHisoty(historeSquares: string[], num: number) {
        setSquares(historeSquares);
        setInner(inner.slice(0, num));
        setNumber(num);
        if (num % 2 == 0) {
            setIsNextX(true);
        } else {
            setIsNextX(false);
        }
    }
    function clickSquare(i: number) {
        const nextSquares = squares.slice();
        const historeSquares = history.slice() as string[][];
        if (nextSquares[i] !== '' || calculateWinner(squares) !== null) {
            return;
        } else {
            const num = number;
            historeSquares[num] = nextSquares;
            setNumber(num + 1);
            setHistory(historeSquares);
            let newInner;
            if (num === 0) {
                newInner = (
                    <button
                        key={inner.length}
                        onClick={() => {
                            clickHisoty(Array(9).fill('') as string[], num);
                        }}
                        className='button-history'>
                        Вернуться в начало
                    </button>
                );
            } else {
                newInner = (
                    <button
                        key={inner.length}
                        onClick={() => {
                            clickHisoty(historeSquares[num - 1], num);
                        }}
                        className='button-history'>
                        Вернуться на ход: {num}
                    </button>
                );
            }
            setInner([...inner, newInner]);
        }
        if (isNextX) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setIsNextX(!isNextX);
    }

    return (
        <>
            <div>{status}</div>
            <div className='div'>
                <Square
                    value={squares[0]}
                    click={() => {
                        clickSquare(0);
                    }}
                />
                <Square
                    value={squares[1]}
                    click={() => {
                        clickSquare(1);
                    }}
                />
                <Square
                    value={squares[2]}
                    click={() => {
                        clickSquare(2);
                    }}
                />
            </div>

            <div className='div'>
                <Square
                    value={squares[3]}
                    click={() => {
                        clickSquare(3);
                    }}
                />
                <Square
                    value={squares[4]}
                    click={() => {
                        clickSquare(4);
                    }}
                />
                <Square
                    value={squares[5]}
                    click={() => {
                        clickSquare(5);
                    }}
                />
            </div>

            <div className='div'>
                <Square
                    value={squares[6]}
                    click={() => {
                        clickSquare(6);
                    }}
                />
                <Square
                    value={squares[7]}
                    click={() => {
                        clickSquare(7);
                    }}
                />
                <Square
                    value={squares[8]}
                    click={() => {
                        clickSquare(8);
                    }}
                />
            </div>
            <div className='div-history'>{inner}</div>
        </>
    );
}

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

export default App;
