import { Link } from 'react-router-dom';
import { LoggedUserType } from '../services/types';
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const loggedUser: LoggedUserType = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '' }));
  loggedUser.role = Number(loggedUser.role);

  return (
    loggedUser.jwt &&
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to={loggedUser.role == 5 ? '/admin' : '/seller'}>Dashboard /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
