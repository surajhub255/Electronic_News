package ltts.com.model;

public class ChangePass {

	private String uemail;
	private String oldpass;
	private String newpass;
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getOldpass() {
		return oldpass;
	}
	public void setOldpass(String oldpass) {
		this.oldpass = oldpass;
	}
	public String getNewpass() {
		return newpass;
	}
	public void setNewpass(String newpass) {
		this.newpass = newpass;
	}
	public ChangePass(String uemail, String oldpass, String newpass) {
		super();
		this.uemail = uemail;
		this.oldpass = oldpass;
		this.newpass = newpass;
	}
	public ChangePass() {
		super();
	}
}
