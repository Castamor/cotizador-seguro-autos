const Error = ({children}) => {
    return (
        <p className="absolute left-0 right-0 w-fit mx-auto bg-red-600 text-white font-bold text-center rounded mt-3.5 p-2">
            {children}
        </p>
    );
}

export default Error;