import './Git.css';
import GitIcon from '../../assets/github2.svg'

function Git () {
    return (
        <footer className="footerGit">
            <a href="https://github.com/Bastctt"><img className="iconGit" src={GitIcon} alt="GitHub"></img></a>
        </footer>
    )
}

export default Git;