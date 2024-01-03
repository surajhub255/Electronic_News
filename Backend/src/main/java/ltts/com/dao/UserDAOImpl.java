package ltts.com.dao;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import ltts.com.jpa.UserRepository;
import ltts.com.model.Users;

@Repository
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private UserRepository myRepo;

	@Override
	public boolean addUser(Users users) {
		String encrptedPassword=hashPassword(users.getPassword());
		System.out.println("gpwd:"+encrptedPassword);
		users.setPassword(encrptedPassword);
		Users u=myRepo.save(users);		
		 if(u!=null)
		 {
			 return true;
		 } 		
		 return false;	
	}
	
	@Override
	public String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}

	@Override
	public boolean checkPass(String plainPassword, String hashedPassword) {
		return BCrypt.checkpw(plainPassword, hashedPassword);
	}

	@Override
	public Users login(String uemail, String password)
	{
		Optional<Users> getData = myRepo.findById(uemail);
		if(getData.isPresent())
		{
			Users u=getData.get();
			String existingPwd=u.getPassword();
			System.out.println("epwd:"+existingPwd);
			if(checkPass(password,existingPwd))
				return u;
		    return null;
		}		
		return null;
	}

	@Override
	@Transactional
	public int updateUserName(String name, String uemail) {
		return myRepo.updateName(name, uemail);
	}

	@Override
	@Transactional
	public int updateUserPassword(String oldpass,String newpass, String uemail) {
		Optional<Users> getData = myRepo.findById(uemail);
		if(getData.isPresent())
		{
			Users u=getData.get();
			String existingPwd=u.getPassword();
			System.out.println("epwd:"+existingPwd);
			String encryptpass=hashPassword(newpass);
			if(checkPass(oldpass,existingPwd))
				return myRepo.updatePassword(encryptpass, uemail);
		    return 0;
		}		
		return 0;
	}

	@Override
	public Users getUser(String uemail) {
		Optional<Users> getData = myRepo.findById(uemail);
		if(getData.isPresent()) {
			Users u = getData.get();
			return u;
		}
		return null;
	}

	

}
