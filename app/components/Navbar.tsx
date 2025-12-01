import {checkUser} from '@/lib/checkuser';
export default  function  Navbar() {
    const user = checkUser();
    return (
        <nav>
            <h1>SpendWise AI</h1>
        </nav>
    );
}