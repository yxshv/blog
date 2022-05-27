interface Props {
    comment: string;
    name: string;
}

const Comment = ({ comment, name } : Props) => {
    return (
        <div className="flex flex-col pb-4 gap-2 justify-center comments">
            <p className="text-2xl leading-none">{comment}</p>
            <p className="text-base text-gray-500 leading-none">- {name}</p>
        </div>
    )
}

export default Comment;