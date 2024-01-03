package ltts.com.service;

import ltts.com.model.Users;

public interface UserService {
	
	public boolean addUser(Users users); 
	
	public Users login(String uemail, String password);
	
	public int updateUserName(String name,String uemail);
	
	public int updateUserPassword(String oldpass,String newpass,String uemail);
	
	public Users getUser(String uemail);

}
