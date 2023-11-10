import Breadcrumb from '../../components/Breadcrumb';
import { PendingCateroies } from './PendingCateroies';
import { PendingMachines } from './PendingMachines';
const UnApproved = () => {
  return (
    <>
      <Breadcrumb pageName="All Machines" />
      <div className='mb-3'>
        <PendingMachines />
      </div>
      <PendingCateroies />
    </>
  );
};

export default UnApproved;
