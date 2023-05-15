package com.alexandre.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alexandre.crudspring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Long,Course> {
    
}
