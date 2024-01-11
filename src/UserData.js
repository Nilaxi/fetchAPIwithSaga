import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';


export default function UserData() {
    const user = useSelector(y => y.user);
    const dis = useDispatch();
    console.log(user);

    const [data, setData] = useState([])
    console.log(data);

    useEffect(() => {
        dis({ type: 'GET_USERS_REQUESTED' })
    }, [])
    return (
        <div>
            <div className='ms-5 mt-5 row d-flex gap-5'>
                {
                    user.data.map(v => (
                        <Card style={{ width: '15rem', height: "fit-content" }}>
                            <Card.Body>
                                <Card.Title>{v.id}</Card.Title>
                                <Card.Title>{v.title}</Card.Title>
                                <Card.Text>{v.description}</Card.Text>
                            </Card.Body>

                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
