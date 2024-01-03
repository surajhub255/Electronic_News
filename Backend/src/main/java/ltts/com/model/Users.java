package ltts.com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class Users {

	@Column(nullable=false)
	private String name;
	@Id
	private String uemail;
	@Column(nullable=false)
	private String password;
	@Column
	private String atype;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAtype() {
		return atype;
	}
	public void setAtype(String atype) {
		this.atype = atype;
	}
	public Users() {
		super();
	}
	public Users(String name, String uemail, String password, String atype) {
		super();
		this.name = name;
		this.uemail = uemail;
		this.password = password;
		this.atype = atype;
	}
	@Override
	public String toString() {
		return "Users [name=" + name + ", uemail=" + uemail + ", password=" + password + ", atype=" + atype + "]";
	}
}
