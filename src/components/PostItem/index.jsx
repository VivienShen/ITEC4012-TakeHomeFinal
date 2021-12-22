import './styles.css';

export const PostItem = (props) => {
    const {text, user, name, id} = props;

    return (
        <div className="post">
            <h1 className="post-name"> {name} </h1>
            <h2 className="post-user"> @{user} </h2>
            <p className="post-text"> {text} </p>
        </div>
    )
}