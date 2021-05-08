import DepositModal, { WithdrawModal } from '../Modal/userModal'

export const GamesItems = [
    {
      title: 'Roulette',
      path: '/Roulette',
      cName: 'dropdown-link'
    },
    {
      title: 'Slots',
      path: '/Slots',
      cName: 'dropdown-link'
    },
    {
      title: 'NLIFE Drifting',
      path: '/nlc/WebGLGame',
      cName: 'dropdown-link'
    },
    {
      title: 'Blackjack',
      subtitle: '(Coming Soon)',
      path: '#',
      cName: 'dropdown-unlink'
    },
    {
      title: 'Carribean Stud Poker',
      subtitle: '(Coming Soon)',
      path: '#',
      cName: 'dropdown-unlink'
    },
    {
      title: 'Craps',
      subtitle: '(Coming Soon)',
      path: '#',
      cName: 'dropdown-unlink'
    }
  ];


  export const UserItems = [
    {
      title: 'Account',
      path: '/UserAccount',
      cName: 'dropdown-link'
    },
    {
      title: 'Deposit',
      path: <DepositModal/>,
      cName: 'dropdown-link'
    },
    {
      title: 'Withdraw',
      path: <WithdrawModal />,
      cName: 'dropdown-link'
    },
    {
      title: 'Logout',
      path: '/',
      cName: 'dropdown-link'
    },
  ];
  