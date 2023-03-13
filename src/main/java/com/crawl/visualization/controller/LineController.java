package com.crawl.visualization.controller;

import com.crawl.visualization.entity.Line;
import com.crawl.visualization.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("line")
public class LineController {
    
    @Autowired
    private LineService lineService;
    
    @RequestMapping("line")
    public List<Line> list(){
        return lineService.list();    
    }
}
