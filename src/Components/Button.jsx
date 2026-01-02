export const Button = ({content}) => {
    return ( 
<> 
    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
        {content}
    </button>
</>


    ); 
} 