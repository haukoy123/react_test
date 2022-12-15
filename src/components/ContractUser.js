import PersonIcon from '@mui/icons-material/Person';


function ContractUser({userName}) {
    return (
        <div className='mx-5'>
            <PersonIcon sx={{height: 40, width: 40}} />
            <span className='text-lg'>
                hau tran
            </span>
        </div>
    )
}

export default ContractUser