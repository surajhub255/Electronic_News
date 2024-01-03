package ltts.com.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.dao.NewsDAO;
import ltts.com.model.News;

@Service
public class NewsServiceImpl implements NewsService {
	@Autowired
	 private NewsDAO newsDao;

	@Override
	public boolean addNews(News news) {
		// TODO Auto-generated method stub
		return newsDao.addNews(news);
	}

	@Override
	public List<News> showAll() {
		// TODO Auto-generated method stub
		return newsDao.showAll();
	}

	@Override
	public List<String> getTitles() {
		// TODO Auto-generated method stub
		return newsDao.getTitles();
	}

	@Override
	public int updateNews(String srcname, String category, String title, String descr, String url, String imgurl,
			Date pdate, String content, int nvcount, String status, int newsid) {
		// TODO Auto-generated method stub
		return newsDao.updateNews(srcname,category,title,descr,url,imgurl,pdate,content,nvcount,status,newsid);
	}

	@Override
	public int deleteNews(int newsid) {
		// TODO Auto-generated method stub
		return newsDao.deleteNews(newsid);
	}

	@Override
	public int updateViewCount(int newsid) {
		// TODO Auto-generated method stub
		return newsDao.updateViewCount(newsid);
	}

	@Override
	public List<Integer> sumOfViewByCategory() {
		// TODO Auto-generated method stub
		return newsDao.sumOfViewByCategory();
	}

	@Override
	public List<News> getCategory(String category) {
		// TODO Auto-generated method stub
		return newsDao.getCategory(category);
	}

	@Override
	public News getNewsById(int newsid) {
		// TODO Auto-generated method stub
		return newsDao.getNewsById(newsid);
	}

	@Override
	public List<News> showActive() {
		// TODO Auto-generated method stub
		return newsDao.showActive();
	}

//	@Override
//	public List<News> getDate(String category, Date pdate) {
//		// TODO Auto-generated method stub
//		return newsDao.getDate(category, pdate);
//	}
}
