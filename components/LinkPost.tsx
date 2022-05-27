import Link from 'next/link'

interface Props {
    name : string;
    dsc : string;
    url : string;
}

const LinkPost = ({ name , dsc , url } : Props) => {
    return (
        <li>
            <h4 className='mb-0'>
                <Link href={`/blogs/${url}`}>
                    {name}
                </Link>
            </h4>
            <p className="mt-0">
                {dsc}
            </p>
        </li>
    )
}

export default LinkPost