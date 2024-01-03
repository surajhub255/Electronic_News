package ltts.com.dao;

import ltts.com.model.Users;

public interface UserDAO {
	
	public boolean addUser(Users users);
	
	public String hashPassword(String plainTextPassword);
	
	public boolean checkPass(String plainPassword, String hashedPassword);
	
	public Users login(String uemail, String password);
	
	public int updateUserName(String name,String uemail);
	
	public int updateUserPassword(String oldpass,String newpass,String uemail);
	
	public Users getUser(String uemail);

}
