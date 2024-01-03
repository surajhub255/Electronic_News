package ltts.com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.dao.UserDAO;
import ltts.com.model.Users;

@Service
public class UserServiceImpl implements UserService {
	
	 @Autowired
	 private UserDAO userDao;

	@Override
	public boolean addUser(Users users) {
		return userDao.addUser(users);
	}

	@Override
	public Users login(String uemail, String password) {
		return userDao.login(uemail, password);
	}

	@Override
	public int updateUserName(String name, String uemail) {
		return userDao.updateUserName(name, uemail);
	}

	@Override
	public int updateUserPassword(String oldpass,String newpass,String uemail) {
		return userDao.updateUserPassword(oldpass, newpass, uemail);
	}

	@Override
	public Users getUser(String uemail) {
		// TODO Auto-generated method stub
		return userDao.getUser(uemail);
	}

}
