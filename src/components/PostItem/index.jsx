import './styles.css';

export const PostItem = (props) => {
    const {text, user, id} = props;

    return (
        <div className="post">
            <h2 className="post-user"> @{user} </h2>
            <p className="post-text"> {text} </p>
        </div>
    )
}