package ltts.com.jpa;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ltts.com.model.News;
@Repository
public interface NewsRepository extends CrudRepository<News,Integer> {
	
	@Query("select n.title from News n")
	List<String> getTitles(); 
	
	@Query("select n from News n order by pdate desc")
	List<News> getNews();
	
	@Query("select n from News n where n.status='Active'")
    List<News> getActiveNews();
	
	@Query("select n from News n where n.category=:category and n.status='Active'")
    List<News> getCategory(@Param("category") String category);
	
	@Query("select n from News n where n.category=:category and n.status='Active' and n.pdate=:pdate")
    List<News> getDate(@Param("category") String category,@Param("pdate") Date pdate);
	
	 @Modifying
	 @Query("update News n set n.srcname=:srcname,n.category=:category,n.title=:title,n.descr=:descr,n.url=:url,n.imgurl=:imgurl,n.pdate=:pdate,n.content=:content,n.nvcount=:nvcount,n.status=:status where n.newsid=:newsid")
	 int updateNews(@Param("srcname") String srcname,@Param("category") String category,@Param("title") String title,@Param("descr") String descr,@Param("url") String url,@Param("imgurl") String imgurl,@Param("pdate") Date pdate,@Param("content") String content,@Param("nvcount") int nvcount,@Param("status") String status,@Param("newsid") int newsid);
	 
	@Modifying
	@Query("delete from News n where n.newsid=:newsid")
	int deleteNews(@Param("newsid") int newsid);
	
	@Modifying
	@Query("update News n set n.nvcount=n.nvcount+1 where n.newsid=:newsid")
	int updateViewCount(@Param("newsid") int newsid);
	
	@Query("select sum(n.nvcount) as nvcount from News n group by category order by category ")
	List<Integer> sumOfViewByCategory();
}
