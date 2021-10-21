import Navigation from "../Navigation";

export default function Layaout({ children }) {
    return (
        <>
        <Navigation />
        { children }

        <h1>Footer</h1>
            
        </>
    )
}
