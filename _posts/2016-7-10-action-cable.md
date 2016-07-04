---
layout: post
title: Notes On Action Cable
---

## Intro

Websockets are a neat way to send data between a client and server on a
single tcp connection, without the overhead work of js polling.

It could've been useful to use [faye websockets](faye) at one point.

The goal is to write a simple slack clone while talking about action
cable moving parts in [rails 5](rails_5_announce).

## Topics
- what are websockets?
- source code of action cable related to thing we're doing
- link to pg vs mysql thing, maybe redis isn't so awesome after all
- postgresql pg_notify(with limits) vs redis
- eager loading an app as a separate config.ru proccess, foreman
- js es6 usage (not really coffeescript)
- testing action cable things (unit, integration, acceptance)

# Getting started

Let's start with making a new app. With rails five, let's first do:


  {% highlight bash %}
  $ rails new slack --database=postgresql --skip-test --skip-spring
  {% endhighlight %}

  <br>

  {% highlight ruby %}
    class Foo
        def bar(baz: nil)
            puts "woot" + baz
        end
    end
  {% endhighlight %}


Heroku said I should use postgres, and [comparisons sounded good](sql_databases_do), but your mileage may vary.
We're skipping tests to use [rspec](rspec_docs) instead of minitest.
Skipping spring to make things simpler.


## Simple Auth thingy

## Sending messages

## Receiving messages

## Rooms

## Deploying to heroku
git push heroku master
procfilefree trick

## Deploying with docker
going to use digital ocean, though aws or other things should be the
same

[rails_5_announce]: http://weblog.rubyonrails.org/2016/6/30/Rails-5-0-final/
[sql_databases_do]: https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems
[faye]: https://github.com/faye/faye-websocket-ruby
[rspec_docs]: https://relishapp.com/rspec/rspec-rails/v/3-5/docs
