import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import { URL } from "url";

const Header = () => {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error } = useSWR("/api/hello", fetcher);
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Portfolio website for Shaya Selincourt, a software engineer from Vancouver, BC." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
            </Head>
            <header>{data.name}</header>
        </>
    );
}

export default Header;