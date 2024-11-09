export default function MasBox({ userName, textColor }) {
    let styles = { color: textColor };
    return (
        <h1 style={styles}>hellow {userName} </h1>
    )
}