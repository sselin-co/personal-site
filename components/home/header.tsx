import useSWR from "swr";

const Header = () => {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error } = useSWR("/api/home", fetcher);
    if (error) return <div>failed to load</div>
    return <div>hello {data?.name}!</div>
}

export default Header;