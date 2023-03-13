package com.crawl.visualization.service.serviceimpl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crawl.visualization.dao.DevelopersDao;
import com.crawl.visualization.entity.Developers;
import com.crawl.visualization.entity.Dto.DevelopersDto;
import com.crawl.visualization.service.DevelopersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DevelopersServiceImpl extends ServiceImpl<DevelopersDao, Developers> implements DevelopersService {

    @Autowired
    private DevelopersDao developersDao;

    @Override
    public List<DevelopersDto> findbytypes() {
        List<DevelopersDto> list = developersDao.findbytypes();
        return list;
    }

    @Override
    public List<DevelopersDto> findbylanguages() {
        List<DevelopersDto> list = developersDao.findbylanguages();
        return list;
    }

    @Override
    public List<DevelopersDto> findbypublishers() {
        List<DevelopersDto> list = developersDao.findbypublishers();
        return list;
    }

    @Override
    public List<DevelopersDto> findbypoints() {
        List<DevelopersDto> list = developersDao.findbypoints();
        return list;
    }
}