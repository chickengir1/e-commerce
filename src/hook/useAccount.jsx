import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useAccount = () => {
  const [cookies] = useCookies(['userCookie', 'adminCookie', 'email']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const deleteAccount = async () => {
    setLoading(true);
    setError('');
    const Token = cookies.userCookie || cookies.adminCookie;
    const email = cookies.email;

    if (!Token || !email) {
      setError(!Token ? '인증 토큰이 없습니다.' : '이메일이 없습니다.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/delete/${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(await response.text() || '계정 삭제에 실패했습니다.');
      }

      console.log('계정이 성공적으로 삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('계정 삭제 중 오류 발생:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteAccount, loading, error };
};

export default useAccount;
     