import styled from "styled-components";
import Image from 'next/image';
import Link from "next/link";
import Button from "components/buttons";
import Head from "next/head";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { NavBarWrapper, MenuList, AuthButtonWrapper, NavToggle } from "components/navbar";
import Footer from "components/footer";




const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 200px;
    width: 100%;
    max-width: var(--max-width);
    margin-inline: auto;
    padding: 1rem;
    background:var(--card-bg);
    h1{
        text-align:center;
    }

`;



export default function Page() {
    const [open, setOpen] = useState(false);

    const { data: session } = useSession()

    return (
        <>
            <Head>
                <title>Privacy Policy - K K UPGRADER</title>
            </Head>
            <NavBarWrapper>
                <Link href="/">
                    <Image src="/textLogo.svg" alt="K K UPGRADER" width={120} height={100} />
                </Link>
                <MenuList open={open}>
                    <Link href="/">Home</Link>
                    <Link href="/tools">Tools</Link>
                    <Link href="/about">About</Link>
                    <Link href="/pricing">Pricing</Link>
                </MenuList>
                <AuthButtonWrapper>
                    {session ? <Button as={Link} href="/dashboard">Go to Dashboard</Button> :
                        <>
                            <Button level="true" as={Link} href="/login">Log In</Button>
                            <Button as={Link} href="/signup">Sign Up</Button>
                        </>}
                    <NavToggle onClick={() => setOpen(!open)} level="true">
                        <HiBars3 />
                    </NavToggle>
                </AuthButtonWrapper>
            </NavBarWrapper>
            <PageWrapper>
                <h1>Privacy Policy for K K UPGRADER</h1>

                <p>At K K UPGRADER, accessible from https://kkupgrader.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by K K UPGRADER and how we use it.</p>
            </PageWrapper>
            <Footer only="true" />
        </>
    )
}