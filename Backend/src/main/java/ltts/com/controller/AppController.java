package ltts.com.controller;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ltts.com.exception.ResourceNotFoundException;
import ltts.com.model.ChangePass;
import ltts.com.model.News;
import ltts.com.model.Users;
import ltts.com.service.NewsService;
import ltts.com.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/mainapp")
public class AppController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	private NewsService newsService;
	
	@PostMapping("/signup")
	public String getRegister(@RequestBody Users u)
	{		
		if(u.getAtype()==null) {
			u.setAtype("User");
		}
		service.addUser(u);
		return "Reg successfuly";
	}
	
	@PostMapping("/login")
	public String getUser(@RequestBody Users u ) {
		
		Users obj = service.login(u.getUemail(),u.getPassword());
//		System.out.println(obj.getAtype());
		if(obj == null) {
			return "failed";
		}else if(obj.getAtype().contentEquals("Admin")) {
 			return "Admin";
 		}else if(obj.getAtype().contentEquals("User") ) {
 			return "User";
 		}else {
 			return "failed";
 		}
 		   
 		
		
	}
	
	@PutMapping("/updatename")
 	public String updateUserName(@RequestBody Users u)	throws ResourceNotFoundException
	{		
		if(service.updateUserName(u.getName(), u.getUemail())>0)
			return "Updated successfully";
		throw new ResourceNotFoundException("No data exist to udpate");

	}
	
	@PutMapping("/updatepass")
 	public String updateUserPassword(@RequestBody ChangePass c)	throws ResourceNotFoundException
	{	
		System.out.println(c.getOldpass()+" "+ c.getNewpass()+" "+ c.getUemail());
		if(service.updateUserPassword(c.getOldpass(), c.getNewpass(), c.getUemail())>0)
			return "Updated successfully";
		return "failed";

	}
	
	@GetMapping("/show/{uemail}")
	public Users getUser(@PathVariable(name="uemail")  String uemail) throws ResourceNotFoundException {
		Users u = service.getUser(uemail);
		if(u != null) {
			return u;
		}
		throw new ResourceNotFoundException("No data exist to udpate");
	}
	
	@PostMapping("/news/add")
    public String getAdded(@RequestBody News n) {
		
		n.setNvcount(0);
		newsService.addNews(n);
		return "added successfully";
	}
	
	@GetMapping("/showall")
	public List<News> showAll()
    {
        
        return newsService.showAll();
    }
	
	@GetMapping("/showall/active")
    public List<News> showActive()
    {
        
        return newsService.showActive();
    }
	
	@GetMapping("/show/title")
    public List<String> getTitles(){
		List<String> ne=newsService.getTitles();
		return ne;
	}
	
	@PutMapping("/updatenews/{newsid}")
	public String updateNews(@PathVariable(name="newsid") int newsid, @RequestBody News n) {

		if(newsService.updateNews(n.getSrcname(),n.getCategory(),n.getTitle(),n.getDescr(),n.getUrl(),n.getImgurl(),n.getPdate(),n.getContent(),n.getNvcount(),n.getStatus(),newsid)>0)
			return "updated successfully";
		return "does not exist";
	}
	
	@DeleteMapping("/deletenews/{newsid}")
	public String deleteNews(@PathVariable(name="newsid") int newsid) {
		if(newsService.deleteNews(newsid)>0) {
			return "deleted successfully";
		}
		return "not exist";
	}
	
	@PutMapping("/updatenewsview/{newsid}")
	public String updateViews(@PathVariable(name="newsid") String newsid) {
		int newsid1 = Integer.parseInt(newsid);
		if(newsService.updateViewCount(newsid1)>0) {
			return "Successfull";
		}
		return "failed";
	}
	
	@GetMapping("/viewcountbycategory")
	public List<Integer> sumOfViewByCategory(){
		List<Integer> ul = newsService.sumOfViewByCategory();
		return ul;
	}
	
	@GetMapping("/show/category/{category}")
    public List<News> getCategory(@PathVariable(name="category") String category){
        List<News> c = newsService.getCategory(category);
        return c;
    }
	
	@GetMapping("/show/newsbyid/{newsid}")
	public News getNewsById(@PathVariable(name="newsid") int newsid) throws ResourceNotFoundException {
		News n = newsService.getNewsById(newsid);
		if(n == null) {
			throw new ResourceNotFoundException("Not found comment with id = " + newsid);
		}
		return n;
	}
	