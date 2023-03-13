package com.crawl.visualization.service.serviceimpl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crawl.visualization.dao.LineDao;
import com.crawl.visualization.entity.Line;
import com.crawl.visualization.service.LineService;
import org.springframework.stereotype.Service;

@Service
public class LineServiceImpl extends ServiceImpl<LineDao, Line> implements LineService {
}