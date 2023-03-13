package com.crawl.visualization.controller;

import com.crawl.visualization.entity.Developers;
import com.crawl.visualization.entity.Dto.DevelopersDto;
import com.crawl.visualization.service.DevelopersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("developers")
public class DevelopersController {
    
    @Autowired
    private DevelopersService developersService;
    
    @RequestMapping("list")
    public List<Developers> list(){
        List<Developers> list = developersService.list();
        return list;
    }
    
    @RequestMapping("types")
    public List<DevelopersDto> findbytypes(){
        List<DevelopersDto> types = developersService.findbytypes();
        return types;
    }

    @RequestMapping("languages")
    public List<DevelopersDto> findbylanguages(){
        List<DevelopersDto> languages = developersService.findbylanguages();
        return languages;
    }

    @RequestMapping("publishers")
    public List<DevelopersDto> findbypublishers(){
        List<DevelopersDto> publishersnum = developersService.findbypublishers();
        return publishersnum;
    }

    @RequestMapping("points")
    public List<DevelopersDto> findbypoints(){
        List<DevelopersDto> pointsnum = developersService.findbypoints();
        return pointsnum;
    }
}
