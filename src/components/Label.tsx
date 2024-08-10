interface ILabel{
    text: string,
    htmlFor: string,
}

export const Label = ({ text, htmlFor}: ILabel) => {
    return <label htmlFor={htmlFor}>{text}</label>;
}