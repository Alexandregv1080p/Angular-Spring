package com.alexandre.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.crudspring.model.Course;
import com.alexandre.crudspring.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")

public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> list(){
        return null;
    }
}
