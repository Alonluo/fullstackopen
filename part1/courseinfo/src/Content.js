import Part from "./Part";

const Content = (context) => {
    const content = context.content;
    return (
        <div>
            <Part part={content[0]}></Part>
            <Part part={content[1]}></Part>
            <Part part={content[2]}></Part>
        </div>
    )
}

export default Content;