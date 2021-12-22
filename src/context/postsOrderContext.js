import React, {useState} from 'react';

const PostsOrderContext = React.createContext({
    posts: [],
    order: [],
    addPostToOrder: () => {},
    removePostFromOrder: () => {},
});

export const PostsOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);

    const addPostToOrder = (post) => {
        let newOrder = order; 
        newOrder.push (post);
        setOrder(order);
    }

    const removePostFromOrder = (postId) => {
        let prevOrder = order;
        const found = order.findIndex( (post ) => {
            return (post.id === postId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<PostsOrderContext.Provider
     value={{order: order, addPostToOrder: addPostToOrder, removePostFromOrder: removePostFromOrder }}
    >
        {props.children}
    </PostsOrderContext.Provider>)

} 

export default PostsOrderContext;