package ltts.com.dao;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import ltts.com.jpa.NewsRepository;
import ltts.com.model.News;
@Repository
public class NewsDAOImpl implements NewsDAO {
	
	@Autowired
	private NewsRepository newsRepo;

	@Override
	public boolean addNews(News news) {
		if(newsRepo.save(news)!=null)
			return true;
		return false;
	}

	@Override
	public List<News> showAll() {
//		List<News> nl=(List<News>)newsRepo.findAll();
		List<News> nl=(List<News>)newsRepo.getNews();
//		newsRepo.
		return nl;
	}

	@Override
	public List<String> getTitles() {
		return newsRepo.getTitles();
	}

	@Override
	@Transactional
	public int updateNews(String srcname, String category, String title, String descr, String url, String imgurl,
			Date pdate, String content, int nvcount, String status, int newsid) {
		
		return newsRepo.updateNews(srcname,category,title,descr,url,imgurl,pdate,content,nvcount,status,newsid);
	}

	@Override
	@Transactional
	public int deleteNews(int newsid) {
		// TODO Auto-generated method stub
		return newsRepo.deleteNews(newsid);
	}

	@Override
	@Transactional
	public int updateViewCount(int newsid) {
		// TODO Auto-generated method stub
		return newsRepo.updateViewCount(newsid);
	}

	@Override
	public List<Integer> sumOfViewByCategory() {
		// TODO Auto-generated method stub
		return newsRepo.sumOfViewByCategory();
	}

	@Override
	public List<News> getCategory(String category) {
		// TODO Auto-generated method stub
		 return newsRepo.getCategory(category);
	}

	@Override
	public News getNewsById(int newsid) {
		// TODO Auto-generated method stub
		Optional<News> get = newsRepo.findById(newsid);
		if(!get.isEmpty()) {
			return get.get();
		}
		return null;
	}

	@Override
	public List<News> showActive() {
		// TODO Auto-generated method stub
		return newsRepo.getActiveNews();
	}

//	@Override
//	public List<News> getDate(String category, Date pdate) {
//		// TODO Auto-generated method stub
//		return newsRepo.getDate(category, pdate);
//	}

}
