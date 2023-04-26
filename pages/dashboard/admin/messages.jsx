import { isAdmin } from 'lib/checkUser'
import { getSession } from "next-auth/react"
import DashboardPage from "components/dashboard-page";
import Head from "next/head";
import State from 'components/state';

import { Card } from 'components/Card';
import useSWR from 'swr'
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Dashboard({ user }) {
    
    const { data:messages, error,loading } = useSWR('/api/data', fetcher)





    return (
        <>
            <Head>
                <title>All Messages</title>
            </Head>
            <DashboardPage user={user}>
                <Card>
                    <State loader={ {type:"indeterminate", show:loading, } } alert={{
                        type:error ? "danger" : "success",
                        message:error ? error.message : "Messages loaded successfully",
                    }} />
                    {
                        messages && messages.length > 0 && messages.map((message, index) => {
                            return (
                                <div key={index}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{message.title}</Card.Title>
                                            <Card.Text>
                                                {message.content}
                                            </Card.Text>
                                            <Card.Text>
                                                <small className="text-muted">{message.createdAt}</small>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })

                    }
                </Card>

            </DashboardPage>
        </>
    )
}


export async function getServerSideProps(context) {

    
    const session = await getSession(context);

    if (!session)
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }

    const admin = await isAdmin(context.req);
    if (!admin) {
        console.log("You are not admin");
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }


    return {
        props: { user:session.user },
    }
}