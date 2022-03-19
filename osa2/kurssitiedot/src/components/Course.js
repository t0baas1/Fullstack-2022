
const Course = (course) => {
    console.log(course.course.name)
    const {name} = (course.course)

    const Header = (props) =>{
        console.log(props.name)
        return (
        <div>
            <h1>{props.name}</h1>
        </div>
        )
    }

    const Content = (props) => {
        console.log(props.parts)
        return (
            <div>
                {props.parts.map(part =>
                <Part key={part.name} course={part.name} ex={part.exercises} />
                )}
            </div>
        )
    }

    const Part = (props) => {
        return (
        <div>
            <p>{props.course} {props.ex}</p>
        </div>
        )
    }

    const Total = (props) => {
        const results = props.parts.map(part => part.exercises)
        console.log(results)

        const initialValue = 0;
        const sumWithInitial = results.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        
        console.log(sumWithInitial)

        return (
        <div>
            <h2>total of {sumWithInitial} exercises</h2>
        </div>
        )
    }

    return (
        
        <div>
            <Header name={name} />
            <Content parts ={course.course.parts} />
            <Total parts={course.course.parts} />
        </div>
    )

}


export default Course