package ltts.com.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ltts.com.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,String> {
	@Modifying	
	@Query("update Users u set u.name=:name where u.uemail=:uemail") 
	int updateName(@Param("name") String name,@Param("uemail") String uemail);
	
	@Modifying	
	@Query("update Users u set u.password=:password where u.uemail=:uemail") 
	int updatePassword(@Param("password") String password,@Param("uemail") String uemail);
}
