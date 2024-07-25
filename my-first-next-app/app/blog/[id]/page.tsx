type Params = {
    params: {
        id: string
    }
}

export default function Blog({ params }: Params) {
    return <p>Blog Page {params.id} </p>
}