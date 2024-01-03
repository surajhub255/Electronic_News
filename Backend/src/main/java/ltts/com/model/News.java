package ltts.com.model;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="news")
public class News {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int newsid;
	@Column(nullable=false)
	private  String srcname;
	@Column(nullable=false)
	private String category;
	@Column(nullable=false,unique=true)
	private String title;
	@Column(nullable=false)
	private String descr;
	@Column(nullable=false)
	private String url;
	@Column(nullable=false)
	private String imgurl;
    @Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "pdate")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date pdate;
	@Column(nullable=false)
	private String content;
	private int nvcount;
	private String status;
	public int getNewsid() {
		return newsid;
	}
	public void setNewsid(int newsid) {
		this.newsid = newsid;
	}
	public String getSrcname() {
		return srcname;
	}
	public void setSrcname(String srcname) {
		this.srcname = srcname;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getNvcount() {
		return nvcount;
	}
	public void setNvcount(int nvcount) {
		this.nvcount = nvcount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public News() {
		super();
	}
	public News(int newsid, String srcname, String category, String title, String descr, String url, String imgurl,
			Date pdate, String content, int nvcount, String status) {
		super();
		this.newsid = newsid;
		this.srcname = srcname;
		this.category = category;
		this.title = title;
		this.descr = descr;
		this.url = url;
		this.imgurl = imgurl;
		this.pdate = pdate;
		this.content = content;
		this.nvcount = nvcount;
		this.status = status;
	}
	@Override
	public String toString() {
		return "News [newsid=" + newsid + ", srcname=" + srcname + ", category=" + category + ", title=" + title
				+ ", descr=" + descr + ", url=" + url + ", imgurl=" + imgurl + ", pdate=" + pdate + ", content="
				+ content + ", nvcount=" + nvcount + ", status=" + status + "]";
	}
}
