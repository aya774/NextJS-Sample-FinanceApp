import Pageheader from "../components/header"

function Layout({children}) {
    return (
        <>
      <Pageheader className="my-8"/>
      <main>{children}</main>
      <footer className="mt-auto text-center py-8">Footer</footer>
        </>
    )
}

export default Layout
