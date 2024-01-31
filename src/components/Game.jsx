import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Game = props => {
    const navigate = useNavigate()
    useEffect(() => {
        //проверка кол-во ошибок
        if (props.mistakes >= props.totalMistakes) {
            //отрисовать страницу Lose
            navigate('/lose')
        }

        //если есть хоть один 0, то остонавливаем функцию
        for (const tr of props.matrix) {
                if (tr.includes(0)) {
                    return
                }
        }
        props.nextLevel()
        navigate('/won')

    }, [props.mistakes, props.matrix, props.totalMistakes, navigate, props])
    const matrix = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>
                {
                    tr.map((td, tdIndex) => {
                        return (
                            <td key={tdIndex}
                                onClick={() => props.changeCoords(trIndex, tdIndex)}
                                className={
                                    trIndex === props.coords[0] && tdIndex === props.coords[1]
                                        ?
                                        'cell cell-active'
                                        :
                                        'cell'
                                }>
                                {td || ''}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })
    const values = props.values.map(value => {
        return (
            <li
                key={value}
                className='cell'
                onClick={() => props.changeValue(value)}>
                {value}
            </li>
        )
    })
    return (
        <div className='container d-flex min-vh-100'>
            <table className='sudoku table table-striped-columns'>
                <tbody>
                    {matrix}
                </tbody>
            </table>
            <ul className='d-flex'>{values}</ul>
            <div className='mistakes'>Mistakes: {props.mistakes} / {props.totalMistakes}</div>
        </div>
    )
}

export default Game