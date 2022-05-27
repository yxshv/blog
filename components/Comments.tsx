import { useEffect, useState } from "react";
import { db } from '../firebase-config'
import { query, doc, addDoc, collection, getDocs, getDoc, orderBy, serverTimestamp } from "firebase/firestore" 
import Comment from "./Comment";
import useAuth from "../hooks/useAuth";
import {
	BiLogOut
} from 'react-icons/bi'

interface Props {
	blog: string;
}

interface Comment {
	name: string;
	comment: string;
}

const Comments = ({ blog }: Props) => {

	const [comment, setComment] = useState<string>("");
	const [able, setAble] = useState(false);
	const [comments, setComments] = useState<Comment[]>([]);
	const {user,Login,Logout,loading} = useAuth();

	const handleSubmit = async (e : any) => {
		
		e.preventDefault();

		if (!able) return

		await addDoc(collection(db, blog) , {
			name : user,
			comment : comment,
			createdAt : serverTimestamp(),
		})

		setComment("");

		updateComments()
	}

	async function updateComments() {
		const colRef = collection(db, blog)
		const q = query(colRef, orderBy("createdAt"))

		const cs = (await getDocs(q)).docs.map(
			(doc) => {
				return doc.data()
			}
		);

		const c : Comment[] = [];

		cs.forEach(
			(p) => {
				c.push({
					name: p.name,
					comment: p.comment
				})	
			}
		)

		setComments(c)
	}


	useEffect(() => {
		updateComments()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {
		if (comment.length < 1 || !comment.replace(/\s/g, '').length ) {
			setAble(false);
		} else {
			setAble(true);
		}
	}, [comment])

	return (
		<>
			<h2>Comments</h2>

			{user && <p>Logged in as <strong className="underline">{user}</strong> <BiLogOut onClick={Logout} className="inline font-extrabold text-blue-600 cursor-pointer"/></p>}

			<textarea placeholder="Comment" disabled={user === null} value={comment} onChange={(e) => setComment(e.target.value)} className="comment-c" />
			
			{user ? (
				<>
					<button onClick={handleSubmit} disabled={!able} className="comment-b">Comment</button>
				</>
			) : (
				<button onClick={Login} disabled={loading} className="comment-b">Login</button>
			)}

			<div className="flex mt-10 flex-col">
				{comments.map(
					(c, i) => {
						console.log(c)
						return (
							<Comment key={i} comment={c.comment} name={c.name} />
						)
					}
				)}
			</div>
		</>
	)
}


export default Comments;
