import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to Next JS</p>
      <div>
        <Link href="/admin">Go to admin page</Link>
        <Link href="/about">Go to about page</Link>
        <Link href="/articles">Go to articles page</Link>
        <Link href="/login">Go to login page</Link>
        <Link href="/register">Go to register page</Link>
      </div>
    </div>
  )
}

export default HomePage