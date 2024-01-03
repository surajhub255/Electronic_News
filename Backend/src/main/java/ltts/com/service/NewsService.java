package ltts.com.service;

import java.util.Date;
import java.util.List;

import ltts.com.model.News;

public interface NewsService {
	
	 	public boolean addNews(News news);
		
		public List<News> showAll();
		
		public List<News> showActive();
		
	    public List<String> getTitles();
	    
	    public int updateNews(String srcname,String category, String title, String descr, String url, String imgurl, Date pdate, String content, int nvcount, String status, int newsid);

	    public int deleteNews(int newsid);
	    
	    public int updateViewCount(int newsid);
	    
	    public List<Integer> sumOfViewByCategory();
	    
	    public List<News> getCategory(String category);
	    
	    public News getNewsById(int newsid);
	    
//	    public List<News> getDate(String category,Date pdate);
}
