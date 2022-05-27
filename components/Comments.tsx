import { useEffect, useState } from "react";
import { db } from '../firebase-config'
import { doc, setDoc } from "firebase/firestore" 

interface Props {
	blog: string;
}

interface Comment {
	name: string;
	comment: string;
}

const Comments = ({ blog }: Props) => {

	const [name, setName] = useState<string>("");
	const [comment, setComment] = useState<string>("");
	const [able, setAble] = useState(false);
	const [comments, setComments] = useState<Comment[]>([]);

	const handleSubmit = async (e : any) => {
		
		e.preventDefault();

		if (!able) return

		await setDoc(doc(db, "blogs", blog), {
			name, comment
		});

		setName("");
		setComment("");

	}

	useEffect(() => {
		if (name.length < 1 || comment.length < 1 || !name.replace(/\s/g, '').length || !comment.replace(/\s/g, '').length ) {
			setAble(false);
		} else {
			setAble(true);
		}
	}, [name,comment])

	useEffect(() => {
		
	},[])

	return (
		<>
			<h2>Comments</h2>

			<input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="comment-name" />
			<textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} className="comment-c" />
			<button onClick={handleSubmit} disabled={!able} className="comment-b">Comment</button>
		</>
	)
}


export default Comments;